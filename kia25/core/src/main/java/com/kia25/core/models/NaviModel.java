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
import com.kia25.core.rest.client.dto.TrimModel.TrimDto;
import com.kia25.core.rest.client.dto.categoryModel.ModelDto;
import com.kia25.core.rest.client.dto.option.OptionDto;
import com.kia25.core.rest.client.service.Build001Service;
import com.kia25.core.rest.client.service.impl.Build001ServiceImpl;

@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class NaviModel {
	
	private final static Logger LOG = LoggerFactory.getLogger(NaviModel.class);
	
	@OSGiService
	Build001Service service = new Build001ServiceImpl();
	
	/*
	 * get 방식으로 넘어온 parameter를 처리하기 위함
	 */
	@Self
    private SlingHttpServletRequest request;
	
	
	/*
	 * 차량 모델
	 */
	private ModelDto model;
	
	/*
	 * 트림 종류
	 */
	private TrimDto trim;
	
	/*
	 * 옵션 리스트 
	 */
	private List<OptionDto> optionList;
	
	/*
	 * 선택한 컬러 (외장 / 내장)
	 */
	private List<ColorDto> colorList;
	
	/*
	 * 총 금액
	 */
	private int totalPrice = 0;
	
	
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
		 * 테스트용 url : car=EV6&trimCode=LRL&ext=aa&int=M4B&dpcd=N&option=4WD,DWP,CVN
		 * 
		 */
		
		String modelCode = request.getParameter("car");
		String trimCode = request.getParameter("trimCode");
		String exteriorCode = request.getParameter("ext");
		String interiorCode = request.getParameter("int");
		String dpcd = request.getParameter("dpcd");
		
		String optionParam = request.getParameter("option");
		String[] option = null;
		
		if(optionParam!=null) {
			option = optionParam.split(",");			
		}

		
		/*
		 * 있어야 하는 정보
		 * 0. 차량 이미지 => getModelList
		 * 1. 트림 종류, 가격 => 
		 * 2. 외장 컬러 이미지, 가격 => getColorList
		 * 3. 내장 컬러 이미지, 가격 => getColorList
		 * 4. 선택옵션, 가격 => getOptionList
		 * 5. 총가격
		*/
		
		
		/*
		 * json 파일에서 읽어온 DataList
		 */
		
		/*
		 * 차량 이미지
		 */
		List<ModelDto> modelResult = service.getModelAPI().getModelList();
		
		/*
		 * 트림 종류, 가격
		 */
		List<TrimDto> trimResult = service.getTrimListAPI().getTrimList();
		
		/*
		 * 옵션 종류, 가격
		 */
		List<OptionDto> optionResult = service.getOptionlListAPI().getListOfOptions();
		
		/*
		 * 컬러 이미지, 가격
		 */
		List<ColorDto> colorResult = service.getColorListAPI().getColorList();
		
	
		
		/*
		 * parameter로 넘어온 modelCode와 json의 modelCode가 일치하면 필드에 할당
		*/
		if(modelCode!=null) {
			for(ModelDto m : modelResult) {
				if(m.getModelCode().equals(modelCode)) {
					model = m;
				}
			}			
		}
		
		
		/*
		 * parameter로 넘어온 trimCode와 json의 trimCode가 일치하면 필드에 할당
		 * */
		if(trimCode!=null) {
			for(TrimDto t : trimResult) {
				if(t.getTrimCode().equals(trimCode)) {
					trim = t;
					totalPrice += trim.getSellingPrice();
				}
			}			
		}
		
		
		/*
		 * parameter로 넘어온 optionCode와 json의 optionCode가 일치하면 필드에 할당
		 * */
		
		if(option != null) {
			
			optionList = new ArrayList<>();
			
			for(OptionDto o : optionResult) {
				
				for(String s : option) {
					
					if(o.getTrimCode().equals(trimCode)&&o.getOptionCode().equals(s)) {
						
						optionList.add(o);
						totalPrice += Integer.parseInt(o.getOptionPrice());

					}				
				}
			}			
		}
		
		
		
		/*
		 * parameter로 넘어온 colorCode와 json의 colorCode가 일치하면 필드에 할당
		 * 현재 트림 코드가 json에 없음...
		 * */
		if(exteriorCode!=null && interiorCode!=null) {
			
			colorList = new ArrayList<>();
			
			for(ColorDto c : colorResult) {
				
				/*
				 * 익스테리어
				 */
				if(c.getColorCode().equals(exteriorCode)&&c.getCarOptionCode().equals("E")) {
					colorList.add(c);
					totalPrice += Integer.parseInt(c.getColorPrice().replace(",", ""));
				}
				
				/*
				 * 인테리어
				 */
				if(c.getColorCode().equals(interiorCode)&&c.getCarOptionCode().equals("I")) {
					colorList.add(c);
					totalPrice += Integer.parseInt(c.getColorPrice().replace(",", ""));
				}
				
			}
			
		}
		
		
		
		
		
	}





	public ModelDto getModel() {
		return model;
	}

	public void setModel(ModelDto model) {
		this.model = model;
	}

	public List<OptionDto> getOptionList() {
		return optionList;
	}

	public void setOptionList(List<OptionDto> optionList) {
		this.optionList = optionList;
	}

	public List<ColorDto> getColorList() {
		return colorList;
	}


	public void setColorList(List<ColorDto> colorList) {
		this.colorList = colorList;
	}

	public TrimDto getTrim() {
		return trim;
	}

	public void setTrim(TrimDto trim) {
		this.trim = trim;
	}





	public int getTotalPrice() {
		return totalPrice;
	}





	public void setTotalPrice(int totalPrice) {
		this.totalPrice = totalPrice;
	}

	
	
	
	
	
	
	
}
