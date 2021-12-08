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
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.ColorDto;
import com.kia25.core.rest.client.dto.ColorListDto;
import com.kia25.core.rest.client.service.Build003Servicecolor;
import com.kia25.core.rest.client.service.impl.Build003ServiceImplcolor;

import org.apache.sling.models.annotations.DefaultInjectionStrategy;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build003Helpercolor {

	
	Build003Servicecolor Build003Servicecolor = new Build003ServiceImplcolor();

	private static final Logger LOG = LoggerFactory.getLogger(Build003Helpercolor.class);
	

	private List<ColorDto> colorlList;
	
	private int colorCount;
	
	
    @PostConstruct
	public void activate() throws IOException {
    	colorlList = Build003Servicecolor.getColorAPI().getColorList();
    	LOG.debug("colorlList={}", colorlList.size());
    }


	public List<ColorDto> getColorList() {
		return colorlList;
	}


	public int getColorCount() {
		return colorCount;
	}


	public void setColorList(List<ColorDto> colorlList) {
		this.colorlList = colorlList;
	}


	public void setColorCount(int colorCount) {
		this.colorCount = colorCount;
	}

	
}
