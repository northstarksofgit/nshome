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
import com.nsc.aem_sample.core.vo.MainPageVO;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class MainPageComponent {
	private final static Logger LOG = LoggerFactory.getLogger(SampleComponent.class);
	   
	private String mainTitle;
	private String mainDesc;
	
	@Inject
	private Resource resource;
	@Inject
	private WCMUsePojo wcmUse;
	private List<MainPageVO> listDatas;   
	MainPageVO mpVO = new MainPageVO();
	@PostConstruct
	public void activate() throws Exception {
		listDatas = new ArrayList<>();
	    Resource myList = resource.getChild("imageList");

	    if(myList != null && myList.hasChildren()) {
	 	   Iterator<Resource> resourceIterator = myList.listChildren();
	       
	 	   while(resourceIterator.hasNext()) {
	 		   Resource childResource = resourceIterator.next();
	 		   MainPageVO mpVO = childResource.adaptTo(MainPageVO.class);
	 		   listDatas.add(mpVO);
	 		   
//	 		   ItemExam itemExam = childResource.adaptTo(ItemExam.class);
//	 		   listDatas.add(itemExam.getDesc());
	 	   }
	    }
		System.out.println(listDatas);
		
//		if(list != null && list.hasChildren()) {
//			Iterator<Resource> resourceIterator = list.listChildren();
//			
//			while(resourceIterator.hasNext()) {
//				Resource childResource = resourceIterator.next();
//				MainPageVO mpVO = childResource.adaptTo(MainPageVO.class);
//				listDatas.add(mpVO.getMainTitle());
//				listDatas.add(mpVO.getMainDesc());
//			}
//		}
	}

	public String getMainTitle() {
		return mainTitle;
	}

	public String getMainDesc() {
		return mainDesc;
	}
	
	public List<MainPageVO> getListDatas() {
	   return listDatas;
	}
	
}
