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

import com.adobe.cq.sightly.WCMUsePojo;
import com.nsc.aem_sample.core.vo.ItemExam;


@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class SampleComponent{
	
	private final static Logger LOG = LoggerFactory.getLogger(SampleComponent.class);
	
	private String hardCode;
	private String nodeData;
	private String reqParam;
	
	
	//리스트 data를 가져와보겠어요
	@Inject
	private Resource resource;
	
	
	
	private List<String> listDatas;                     
	                         
	@PostConstruct
	public void activate() throws Exception {
		
	   	
		
		
		listDatas = new ArrayList<>();
	    Resource myList = resource.getChild("myList");
	    System.out.println(myList.hasChildren());
	    if(myList != null && myList.hasChildren()) {
	 	   Iterator<Resource> resourceIterator = myList.listChildren();
	       
	 	   LOG.info("myList.hasChildren");
	       
	 	   while(resourceIterator.hasNext()) {
	 		   Resource childResource = resourceIterator.next();
	 		   ItemExam itemExam = childResource.adaptTo(ItemExam.class);
	 		   listDatas.add(itemExam.getDesc());
	 	   }
	    }
	}
	
	public String getHardCode() {
	   return hardCode;
	}
	
	public String getNodeData() {
	   return nodeData;
	}
	
	public String getReqParam() {
	   return reqParam;
	}
	
	public List<String> getListDatas() {
	   return listDatas;
	}
   
}