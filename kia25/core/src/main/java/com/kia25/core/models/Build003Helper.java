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
import com.kia25.core.rest.client.dto.categoryModel.ModelDto;
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
	private List<ModelDto> modelList;

	private int colorCount;

	private String modelCode = null;
	private String carModelName = null;
	private String carImage = null;

	@PostConstruct
	public void activate() throws IOException {
		colorList = Build003Service.getColorAPI().getColorList();
		// modelList = Build003Service.getModelAPI().getModelList();

		/* parameter로 모델명 ,이미지가져오기
		 * http://localhost:4502/editor.html/content/kia25/us/en/page3.html?modelCode=EV6
		 */
		
		  modelCode = request.getParameter("modelCode");
		  
		  for (ModelDto model : Build003Service.getModelAPI().getModelList()) {
		  
				if (model.getModelCode().equals(modelCode)) {
					carImage = model.getCarImage();
					carModelName = model.getCarModelName();
				}
			}
		 
	}

	public List<ColorDto> getColorList() {
		return colorList;
	}

	public int getColorCount() {
		return colorCount;
	}

	public void setColorList(List<ColorDto> colorList) {
		this.colorList = colorList;
	}

	public void setColorCount(int colorCount) {
		this.colorCount = colorCount;
	}

	public List<ModelDto> getModelList() {
		return modelList;
	}

	public void setModelList(List<ModelDto> modelList) {
		this.modelList = modelList;
	}

	public String getModelCode() {
		return modelCode;
	}

	public String getCarModelName() {
		return carModelName;
	}

}
