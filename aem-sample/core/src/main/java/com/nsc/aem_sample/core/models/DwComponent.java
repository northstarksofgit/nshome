package com.nsc.aem_sample.core.models;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class DwComponent{


	@Inject
	private Resource resource;
	private final static Logger LOG = LoggerFactory.getLogger(SampleComponent.class);
	
	//가져올 데이터
	private String title;
	private String desc;
	private List<CoworkerVO> coworkerList;
	
	@PostConstruct
	public void activate() throws  Exception {
		
		ValueMap valueMap = resource.getValueMap();
		
		//제목 가져오기
		title = (String) valueMap.getOrDefault("title", "no title");

		//설명 가져오기
		desc = (String) valueMap.getOrDefault("desc", "no desc");
		
		//node data 가져오기
		coworkerList = new ArrayList<CoworkerVO>();
		
		Resource coworkerNodes = resource.getChild("coworker");
		
		if(coworkerNodes != null && coworkerNodes.hasChildren()) {
			
			Iterator<Resource> coworkerNodesIterator = coworkerNodes.listChildren();
			
			while(coworkerNodesIterator.hasNext()) {
				
				Resource coworkerListChild = coworkerNodesIterator.next();
				CoworkerVO coworker = coworkerListChild.adaptTo(CoworkerVO.class);
				
				coworkerList.add(coworker);
				
			}
		}
		
		
	}


	
	
	//getter 선언
	
	public String getTitle() {
		return title;
	}


	public String getDesc() {
		return desc;
	}


	public List<CoworkerVO> getCoworkerList() {
		return coworkerList;
	}


	
	/*
	public List<String> getImgPath() {
		return imgPath;
	}
	*/
	
	
	
}
