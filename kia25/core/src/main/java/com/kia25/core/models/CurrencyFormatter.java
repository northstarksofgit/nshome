package com.kia25.core.models;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.Locale;

public class CurrencyFormatter {

	
    
    public static String formatPrice(int price, Locale locale) {

        
        DecimalFormat formatter = (DecimalFormat) NumberFormat.getInstance(locale);
       
        return formatter.format(price);
        
    }
    
    
	
}
