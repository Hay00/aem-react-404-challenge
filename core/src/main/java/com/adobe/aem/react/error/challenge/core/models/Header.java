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

package com.adobe.aem.react.error.challenge.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code Header} Sling Model used for the {@code aem-react-error-challenge/components/header} component.
 * 
 */
@ConsumerType
public interface Header
    extends ComponentExporter
{


    String getText();

}
