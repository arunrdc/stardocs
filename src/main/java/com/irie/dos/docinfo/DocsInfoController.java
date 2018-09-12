package com.irie.dos.docinfo;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
public class DocsInfoController {
	@Autowired
	private DocInfoDAO docInfoDAO;

	@CrossOrigin
	@RequestMapping(value = "/docs", produces = MediaType.APPLICATION_JSON_VALUE)
	public Page<DocInfo> index(@PageableDefault(value = 10, page = 0) Pageable pageable) {
		return docInfoDAO.findAll(pageable);

	}
	@CrossOrigin
	@GetMapping("/doc/{id}")
	public DocInfo getDoc(@PathVariable long id) {
		Optional<DocInfo> doc = docInfoDAO.findById(id);
		return doc.get();
	}
	@CrossOrigin
	@GetMapping("/docsbycity")
	public Page<DocInfo> getDocs( @RequestParam("city") String  city,@PageableDefault(value = 10, page = 0) Pageable pageable) {
		System.out.println(city);
		//Page<DocInfo> doc = docInfoDAO.findById((long)2);
		return docInfoDAO.findAllDocsByCity(city,pageable);
	}
	@CrossOrigin
	@DeleteMapping("/doc/{id}")
	public void deleteDoc(@PathVariable long id) {
		docInfoDAO.deleteById(id);
	}
	@CrossOrigin
	@PostMapping("/doc")
	public ResponseEntity<Object> createDoc(@RequestBody DocInfo doc) {
		DocInfo savedDoc = docInfoDAO.save(doc);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(savedDoc.getId())
				.toUri();
		return ResponseEntity.created(location).build();

	}

	@PutMapping("/doc/{id}")
	public ResponseEntity<Object> updateDoc(@RequestBody DocInfo doc, @PathVariable long id) {
		Optional<DocInfo> docOptional = docInfoDAO.findById(id);
		if (!docOptional.isPresent())
			return ResponseEntity.notFound().build();
		doc.setId(id);
     	docInfoDAO.save(doc);
		return ResponseEntity.noContent().build();
	}

}
