package com.kia25.core.models;

import java.math.BigDecimal;
import java.util.Locale;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.api.Page;


@Model(adaptables = { SlingHttpServletRequest.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class CurrencyFormatterModel {

	
    @ScriptVariable
    private Page currentPage;
	
	
	@Inject
    private BigDecimal value;
	
    private String formattedPrice;

    private Locale locale = Locale.KOREA;
    
    private final static Logger LOG = LoggerFactory.getLogger(CurrencyFormatterModel.class);
    
    


    
  
    
    
    
    @PostConstruct
    public void activate() {
    	
    
    	LOG.info("value: "+value);
    	
        BigDecimal price = (value == null) ? BigDecimal.ZERO : value;
        formattedPrice = CurrencyFormatter.formatPrice(price, locale);
        
        LOG.info("formatted Price: "+formattedPrice);
    }
    

    public String getFormattedPrice() {
        return formattedPrice;
    }
	
    
    
    
    
    
    
}
