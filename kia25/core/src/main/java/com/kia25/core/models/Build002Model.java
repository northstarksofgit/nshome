package com.kia25.core.models;

import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.TrimModel.ModelDto;
import com.kia25.core.rest.client.dto.TrimModel.TrimDto;
import com.kia25.core.rest.client.service.Build002Service;
import com.kia25.core.rest.client.service.impl.Build002ServiceImpl;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build002Model {
	
	private final static Logger log = LoggerFactory.getLogger(Build002Model.class);
	
	Build002Service service = new Build002ServiceImpl();
	
	// 파라미터 값을 받아오기 위해 선언
	@Self
    private SlingHttpServletRequest request;
	
	/* SlingHttpServletRequest로 대체함 (파라미터 받아오기 위한 선언)
	@Inject
	private SlingScriptHelper slingScriptHelper;
	
	// SlingModel 로 진행하기 때문에 WCMUsePojo를 extends 하는 대신 import 하고 선언해줌
	private WCMUsePojo a; 
	*/
	
	/**
	 * 차량 모델 리스트
	 */
	private List<ModelDto> modelList;
	
	/**
	 * 차량 trim 리스트
	 */
	private List<TrimDto> trimList;
	
	 
	@PostConstruct
	public void activate() throws Exception{
		
		/**
		 * modelCode 받아와서 변수 선언
		 */
		String modelCode = request.getParameter("modelCode");
		// 파라미터 값 받아오는건 SlingScriptHelper 사용해서 넘겨도 가능함! 
		// 단, URL에서 editor.html 부분만 삭제해주면 
		// String modelCode = (String) slingScriptHelper.getRequest().getParameter("modelCode");
		log.info("getModelCode :::: {}", modelCode);
		
		
		/**
		 * model -> trim으로 넘어가기 위한 변수 선언 해줘야함
		 */
		
		
		
		modelList = service.getModelListAPI().getModelList();
		//log.info("getModelList :::: {}", modelList);
		
		trimList = service.getTrimListAPI().getTrimList();
		//log.info("getTrimList :::: {}", trimList);
				
	}
	
	/**
	 * getter / setter
	 */
	public List<ModelDto> getModelList() {
		return modelList;
	}

	public void setModelList(List<ModelDto> modelList) {
		this.modelList = modelList;
	}

	public List<TrimDto> getTrimList() {
		return trimList;
	}

	public void setTrimList(List<TrimDto> trimList) {
		this.trimList = trimList;
	}
	

	
}