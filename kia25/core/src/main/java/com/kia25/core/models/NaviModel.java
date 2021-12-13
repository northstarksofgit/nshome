package com.kia25.core.models;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
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
		
		/*
		 * 현재 step
		 */
		String step = request.getParameter("step");
		
		/*
		 * 차량 model code
		 */
		String modelCode = request.getParameter("car");
		
		/*
		 * trim code
		 */
		String trimCode = request.getParameter("trimCode");
		
		/*
		 * 외부 color 코드
		 */
		String exteriorCode = request.getParameter("ext");
		
		/*
		 * 내부 color 코드
		 */
		String interiorCode = request.getParameter("int");
		
		/*
		 * ?
		 */
		String dpcd = request.getParameter("dpcd");
		
		/*
		 * 선택한 차량 옵션
		 * optionParam은 parameter로 넘어온 옵션들
		 * option은 pram을 , 기준으로 잘라서 배열처리함
		 */
		String optionParam = request.getParameter("option");
		String[] option = null;
		
		if(optionParam!=null) {
			option = optionParam.split(",");			
		}

		
		

		
		
		
		
		
	}
	
	
	
	
	
	
	
	


}
