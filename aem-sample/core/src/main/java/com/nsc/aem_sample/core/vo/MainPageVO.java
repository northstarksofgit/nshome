package com.nsc.aem_sample.core.vo;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

@Model(adaptables = { Resource.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class MainPageVO {
	@Inject private String mainTitle;
	@Inject private String mainDesc;
	@Inject private String fileReference;
	@Inject private String listDesc;
	@Inject private String path;
	
	
	public String getMainTitle() {
		return mainTitle;
	}
	public String getMainDesc() {
		return mainDesc;
	}
	public String getFileReference() {
		return fileReference;
	}
	public String getListDesc() {
		return listDesc;
	}
	public String getPath() {
		return path;
	}
}
