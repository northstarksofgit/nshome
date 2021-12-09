package com.kia25.core.models;

import java.io.IOException;
import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.ColorDto;
import com.kia25.core.rest.client.dto.ColorListDto;
import com.kia25.core.rest.client.service.Build003Service;
import com.kia25.core.rest.client.service.impl.Build003ServiceImpl;

import org.apache.sling.models.annotations.DefaultInjectionStrategy;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build003Helper {

	Build003Service Build003Service = new Build003ServiceImpl();

	private static final Logger LOG = LoggerFactory.getLogger(Build003Helper.class);
	
	@OSGiService
	Build003Service service = new Build003ServiceImpl();

	@Self
	private SlingHttpServletRequest request;

	private List<ColorDto> colorList;

	private int colorCount;

	@PostConstruct
	public void activate() throws IOException {
		colorList = Build003Service.getModelAPI().getColorList();
		LOG.info("colorList={}", colorList.size());
		

		/*
		 * List<ColorDto> result = Build003Service.getModelAPI().getColorList();
		 * 
		 * for(ColorDto resultmsg : result) { if(resultmsg != null) {
		 * LOG.info("color code:: "+resultmsg.getColorCode());
		 * LOG.info("color name:: "+resultmsg.getColorName());
		 * 
		 * } }
		 */
	}

	public List<ColorDto> getColorList() {
		return colorList;
	}

	public int getColorCount() {
		return colorCount;
	}

	public void setModelList(List<ColorDto> colorList) {
		this.colorList = colorList;
	}

	public void setColorCount(int colorCount) {
		this.colorCount = colorCount;
	}

}
