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

import com.nsc.aem_sample.core.vo.MainPageVO;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class MainPageComponent {
	private final static Logger LOG = LoggerFactory.getLogger(MainPageComponent.class);

	@Inject
	private Resource resource;
	
	private String mainTitle;
	private String mainDesc;
	
	private List<MainPageVO> listDatas;
	
	MainPageVO mpVO = null;
	
	@PostConstruct
	public void activate() throws Exception {
		
		ValueMap valueMap = resource.getValueMap();
		mainTitle = (String)valueMap.getOrDefault("mainTitle", "Input Title");
        mainDesc= (String)valueMap.getOrDefault("mainDesc", "Input Description");
		
		listDatas = new ArrayList<>();
	    Resource myList = resource.getChild("imageList");

	    if(myList != null && myList.hasChildren()) {
	 	   Iterator<Resource> resourceIterator = myList.listChildren();
	       
	 	   while(resourceIterator.hasNext()) {
	 		   Resource childResource = resourceIterator.next();
	 		   mpVO = childResource.adaptTo(MainPageVO.class);

	 		   listDatas.add(mpVO);
	 	   }
	    }
	}

	public String getMainTitle() {
		return mainTitle;
	}

	public String getMainDesc() {
		return mainDesc;
	}
	
}
