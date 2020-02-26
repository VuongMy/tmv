package com.example.tmv.util;

import java.util.Optional;

public class FileUtil {
	public static Optional<String> getExtensionByStringHandling(String filename) {
	    return Optional.ofNullable(filename)
	      .filter(f -> f.contains("."))
	      .map(f -> f.substring(filename.lastIndexOf(".") + 1));
	}
	
	public static Optional<String> getNameByStringHandling(String filename) {
	    return Optional.ofNullable(filename)
	      .filter(f -> f.contains("."))
	      .map(f -> f.substring(0,filename.lastIndexOf(".")));
	}
}
