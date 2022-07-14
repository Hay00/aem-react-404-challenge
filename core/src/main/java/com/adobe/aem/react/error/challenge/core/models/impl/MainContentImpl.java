/*
 * ***********************************************************************
 * AEM Error Challenge CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 AEM Error Challenge.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of AEM Error Challenge and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to AEM Error Challenge
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from AEM Error Challenge.
 * ***********************************************************************
 */

package com.adobe.aem.react.error.challenge.core.models.impl;

import com.adobe.aem.react.error.challenge.core.models.MainContent;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    MainContent.class,
    ComponentExporter.class
}, resourceType = "aem-react-error-challenge/components/main-content")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class MainContentImpl
    implements MainContent
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String errorTitle;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String errorText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonText;
    @SlingObject
    private Resource resource;

    @Override
    public String getErrorTitle() {
        return errorTitle;
    }

    @Override
    public String getErrorText() {
        return errorText;
    }

    @Override
    public String getButtonText() {
        return buttonText;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
