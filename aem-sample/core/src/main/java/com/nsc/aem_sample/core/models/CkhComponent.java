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

import com.nsc.aem_sample.core.vo.CkhPageVO;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class CkhComponent {

	private String mainTitle;
	private String mainDesc;

	@Inject
	private Resource resource;
	@Inject
	private List<CkhPageVO> listDatas;

	CkhPageVO mpVO = new CkhPageVO();

	@PostConstruct
	public void activate() throws Exception {
		listDatas = new ArrayList<>();
		Resource myList = resource.getChild("imageList");

		ValueMap valueMap = resource.getValueMap();

		mainTitle = (String) valueMap.getOrDefault("mainTitle", "There's no title");
		mainDesc = (String) valueMap.getOrDefault("mainDesc", "There's no description");

		if (myList != null && myList.hasChildren()) {
			Iterator<Resource> resourceIterator = myList.listChildren();

			while (resourceIterator.hasNext()) {
				Resource childResource = resourceIterator.next();
				CkhPageVO mpVO = childResource.adaptTo(CkhPageVO.class);
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

	public List<CkhPageVO> getListDatas() {
		return listDatas;
	}

}
