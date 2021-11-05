package com.nsc.aem_sample.core.models;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


// 리스트 하나 listDatas 에 가져온 정보를 전부 담는 방식으로 진행
@Model(adaptables = {SlingHttpServletRequest.class},
defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class NscPractice2{

    // 로그
    private final static Logger LOG = LoggerFactory.getLogger(NscPractice2.class);
    
    // 반환 데이터용 변수 선언
    private String title;
    private String description;
    
    // multifield - 리스트에 담은 값 가져오기
    @Inject
    private Resource resource;
    
    private List<NscListVo2> listDatas;
    
    @PostConstruct 
    public void activate() throws Exception {
        
        // resource에서 값을 가져오기 위해서 valueMap import 해주고 getValueMap 메소드 이용해서 가져오기
        ValueMap valueMap = resource.getValueMap();
        
        title = (String)valueMap.getOrDefault("title", "데이터 어디갔누");
        description = (String)valueMap.getOrDefault("description", "아이고 내 설명");
        
        // list 초기화
        listDatas = new ArrayList<NscListVo2>();
        
        Resource consultingList = resource.getChild("consultingList");
        
        if (consultingList != null && consultingList.hasChildren()) {
        	
            Iterator<Resource> resourceIterator = consultingList.listChildren();
            
            while(resourceIterator.hasNext()) {
                
                Resource childResource = resourceIterator.next();
                // Iterator 이용해서 resource에서 가져온 값 
                // -> nscData 에 담아주기
                NscListVo2 nscData = childResource.adaptTo(NscListVo2.class);
                
               // nscData에 담아준 값 -> list에 추가해주기
               listDatas.add(nscData);
                
//                
//               listDatas.add(nscData.getConsulting());
//               listDatas.add(nscData.getFileReference());
//               listDatas.add(nscData.getLink());
                
            }
        }
    }
    

    // getter / setter 메소드 선언
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<NscListVo2> getListDatas() {
        return listDatas;
    }

    public void setListDatas(List<NscListVo2> listDatas) {
        this.listDatas = listDatas;
    }


   
    
}
