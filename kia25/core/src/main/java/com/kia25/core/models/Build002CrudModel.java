package com.kia25.core.models;

import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.CarGroupDto;
import com.kia25.core.rest.client.dto.TrimDto;
import com.kia25.core.rest.client.service.CrudService;
import com.kia25.core.rest.client.service.impl.CrudServiceImpl;

@Model(adaptables = {SlingHttpServletRequest.class}, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build002CrudModel {

	// 로그 확인
	private final static Logger log = LoggerFactory.getLogger(Build002CrudModel.class);
	CrudService service = new CrudServiceImpl();
	
	// 파라미터 값 받아오기
	@Self 
	private SlingHttpServletRequest request;
	
	private String modelCode = null;
	private String modelYear = null;
	
	// carGroup 리스트
	private List<CarGroupDto> carGroupList;
	// trim 리스트
	private List<TrimDto> trimList;
	
	
	@PostConstruct
	public void activate() throws Exception{
		
		try {
		
			modelCode = request.getParameter("modelCode");
			modelYear = request.getParameter("modelYear");
			
			log.info("modelYear" + modelYear);
			
			carGroupList = service.getCarGroupListAPI(modelCode, modelYear);
			trimList = service.getTrimListAPI(modelCode, modelYear);
			
		} catch(Exception e) {
			e.printStackTrace();
		}
		
	}

	
	/**
	 *	getter / setter
	 */
	public List<CarGroupDto> getCarGroupList() {
		return carGroupList;
	}

	public void setCarGroupList(List<CarGroupDto> carGroupList) {
		this.carGroupList = carGroupList;
	}

	public List<TrimDto> getTrimList() {
		return trimList;
	}

	public void setTrimList(List<TrimDto> trimList) {
		this.trimList = trimList;
	}
	
	
	
}
