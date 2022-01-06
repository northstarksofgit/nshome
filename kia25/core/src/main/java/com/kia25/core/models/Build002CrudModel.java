package com.kia25.core.models;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.service.CrudService;
import com.kia25.core.rest.client.service.impl.CrudServiceImpl;

@Model(adaptables = {SlingHttpServletRequest.class}, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build002CrudModel {

	// 로그 확인
	private final static Logger log = LoggerFactory.getLogger(Build002CrudModel.class);
	
	CrudService service = new CrudServiceImpl();
	
	// 파라미터 값 받아오기
	@Self 
	private SlingHttpServletRequest request;
	
	
	
	@PostConstruct
	public void activate() throws Exception{
		
		
		
	}
	
	
}
