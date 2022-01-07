package com.kia25.core.models;

import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.kia25.core.rest.client.dto.ColorDto;
import com.kia25.core.rest.client.service.CrudService;
import com.kia25.core.rest.client.service.impl.CrudServiceImpl;
import com.kia25.core.servlet.ColorServlet;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Build003CrudModel {

	private final static Logger log = LoggerFactory.getLogger(Build003CrudModel.class);
	CrudService service = new CrudServiceImpl();
	ColorServlet servlet = new ColorServlet();

	@Self
	private SlingHttpServletRequest request;
	
	private List<ColorDto> colorList;
	
 

	@PostConstruct
	public void activate() throws Exception {

		try {

			ColorDto clrDto = new ColorDto();
			clrDto.setModelCode(request.getParameter("modelCode"));
			clrDto.setTrimCode(request.getParameter("trimCode"));
			clrDto.setCarOptionCode(request.getParameter("carOptionCode"));
			clrDto.setSearchWord(request.getParameter("searchWord"));
			colorList = service.listColor(clrDto);
			
//			List<String> getList = colorList.stream().map(ColorDto::getColorCode).collect(Collectors.toList());
//
//			List<ColorDto> colorList2 = new ArrayList<>(colorList.size());
//			
//			for(String ColorCode : getList) {
//				if(getList.indexOf(ColorCode) == getList.lastIndexOf(request.getParameter("searchWord"))) {
//					Collections.copy(colorList2, colorList);
//				}
//						
//			}
			
		} catch (Exception ex) {
			ex.printStackTrace();
			System.out.println("error Msg ***" + ex.getMessage());
		}

	}
	
	public List<ColorDto> getColorList() {
		return colorList;
	}

}