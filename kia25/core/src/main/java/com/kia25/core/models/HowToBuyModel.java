package com.kia25.core.models;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.AreaDto;
import com.kia25.core.rest.client.dto.AreaListDto;
import com.kia25.core.rest.client.dto.AreaListDtoResults;
import com.kia25.core.rest.client.dto.AreaSiSubDto;
import com.kia25.core.rest.client.dto.TransDto;
import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.impl.BuildYourCarServiceImpl;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class HowToBuyModel {
	
	private final static Logger log = LoggerFactory.getLogger(HowToBuyModel.class);
	
	BuildYourCarService service = new BuildYourCarServiceImpl();
	
	// 파라미터 값을 받아오기 위해 선언
	@Self
    private SlingHttpServletRequest request;
	

	private AreaListDtoResults areaRestuls;
	private AreaListDto areaData;
	private List<AreaDto> areaList;
	private List<TransDto> transList;
	private List<Map<String, Object>> siSubList = new ArrayList<Map<String, Object>>();
	
	 
	@PostConstruct
	public void activate() throws Exception{
		
		areaRestuls = service.getAreaListAPI();
		areaData = service.getAreaListAPI().getData();
		areaList = areaData.getAreaList();
		transList = areaData.getTransList();
		
			
		for(AreaDto aa : areaList){
			for(AreaSiSubDto bb : aa.getSiSub()) {
				
				Map<String, Object> map = new HashMap<String, Object>();
				map.put("siCode", aa.getSiCode());
				
				map.put("siSubCode", bb.getSiSubCode());
				map.put("siSubName", bb.getSiSubName());
				siSubList.add(map);
			}
		}
		
	}
	

	/**
	 * getter / setter
	 */
	public AreaListDtoResults getAreaRestuls() {
		return areaRestuls;
	}


	public AreaListDto getAreaData() {
		return areaData;
	}


	public List<AreaDto> getAreaList() {
		return areaList;
	}


	public List<Map<String, Object>> getSiSubList() {
		return siSubList;
	}


	public List<TransDto> getTransList() {
		return transList;
	}
	
	
	
	
}