package com.kia25.core.models;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.api.scripting.SlingScriptHelper;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.ColorDto;
import com.kia25.core.rest.client.dto.ModelDto;
import com.kia25.core.rest.client.dto.OptionDto;
import com.kia25.core.rest.client.dto.SummaryDto;
import com.kia25.core.rest.client.dto.TrimDto;

import com.kia25.core.rest.client.service.BuildYourCarService;
import com.kia25.core.rest.client.service.impl.BuildYourCarServiceImpl;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class NaviModel {
	
	private final static Logger LOG = LoggerFactory.getLogger(NaviModel.class);
	
	@OSGiService
	BuildYourCarService service = new BuildYourCarServiceImpl();
	
	/*
	 * get 방식으로 넘어온 parameter를 처리하기 위함
	 */
	@Self
    private SlingHttpServletRequest request;
	
	
	/*
	 * node에 저장된 data를 가져온다
	 */
	@Inject
	private Resource resource;
	
	
	/*
	 * summary 데이터
	 */
	private SummaryDto summary;
	
	
	@PostConstruct
	public void activate() throws  Exception {
		
		
		
		/*
		 * 스텝별로 넘어오는 파라미터
		 * 
		 * 2 step: car=EV6.dpcd=N
		 * 3 step: car=EV6-LEV.trim=CVJJ5VD31-A.dpcd=N
		 * 4 step: car=EV6-LEV.trim=CVJJ5VD31-A.dpcd=N.ext=ABP.int=IN_EV6_BL
		 * 5 step car=EV6-LEV.trim=CVJJ5VI31-A.ext=SWP.int=IN_EV6_BL.dpcd=N.option=4WD,DWP,CVN
		 * 
		 * carid(modelCode), dpcd(??), trim(trimCode), ext(exteriorCode), int(interiorCode)
		 * 
		 * 테스트용 url : ?car=EV6&trimCode=LRL&option=4WD,DWP,CVN&ext=SWP&int=M4B&dpcd=N
		 * 
		 */
		
		
		ValueMap valueMap = resource.getValueMap();
		String step = (String) valueMap.getOrDefault("step", null);
		String url = (String) valueMap.getOrDefault("toGo", null);
		String trimCheck = (String) valueMap.getOrDefault("trim", null);
		String colorCheck = (String) valueMap.getOrDefault("color", null);
		String optionCheck = (String) valueMap.getOrDefault("option", null);
		
		LOG.info("step: "+step);
		LOG.info("url: "+url);
		LOG.info("trimCheck: "+trimCheck);
		LOG.info("colorCheck: "+colorCheck);
		LOG.info("option: "+optionCheck);
		
		
		
		
		
		/*
		 * 현재 step
		String step = request.getParameter("step");
		
		step = (step == null) ? "0" : step;
		*/

		
		/*
		 * 선택한 차량 옵션
		 * optionParam은 parameter로 넘어온 옵션들
		 * option은 pram을 , 기준으로 잘라서 배열처리함
		 * 
		 * 		String optionParam = request.getParameter("option");
				String[] option = null;
				
				if(optionParam!=null) {
					option = optionParam.split(",");			
				}
		 * 
		 */


		/*
		 * summary정보 호출
		 */
		
		summary = service.getSummaryAPI(step);
		
		
		
		
	}


	public SummaryDto getSummary() {
		return summary;
	}


	public void setSummary(SummaryDto summary) {
		this.summary = summary;
	}
	
	
	


}
