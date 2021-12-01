package com.nsc.aem_sample.core.models;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

@Model(adaptables = { Resource.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class NscListVo2 {

    @Inject
    private String consulting;
    
    @Inject
    private String fileReference;
    
    @Inject
    private String link;
    
    
    // getter / setter 메소드

    public String getConsulting() {
        return consulting;
    }

    public void setConsulting(String consulting) {
        this.consulting = consulting;
    }

    public String getFileReference() {
        return fileReference;
    }

    public void setFileReference(String fileReference) {
        this.fileReference = fileReference;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    
    
}
