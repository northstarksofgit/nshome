package com.kia25.core.models;

import java.io.IOException;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import javax.inject.Inject;

import org.apache.felix.scr.annotations.Reference;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.ModelDto;
import com.kia25.core.rest.client.dto.ModelListDto;
import com.kia25.core.rest.client.service.Build003Service;
import com.kia25.core.rest.client.service.impl.Build003ServiceImpl;

import org.apache.sling.models.annotations.DefaultInjectionStrategy;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build003Helper {

	
	Build003Service Build003Service = new Build003ServiceImpl();

	private static final Logger LOG = LoggerFactory.getLogger(Build003Helper.class);
	
	@Self
    private SlingHttpServletRequest request;
	

	private List<ModelDto> modelList;
	
	private int modelCount;
	
	
    @PostConstruct
	public void activate() throws IOException {
    	modelList = Build003Service.getModelAPI().getModelList();
    	LOG.debug("modelList={}", modelList.size());
    }


	public List<ModelDto> getModelList() {
		return modelList;
	}


	public int getModelCount() {
		return modelCount;
	}


	public void setModelList(List<ModelDto> modelList) {
		this.modelList = modelList;
	}


	public void setModelCount(int modelCount) {
		this.modelCount = modelCount;
	}

	
}
