package com.example.tmv.util;

import java.util.Date;
import java.util.Random;

public class RandomMethod {
	
	public static String randomKey(int targetStringLength) {
		int leftLimit = 97; // letter 'a'
		int rightLimit = 122; // letter 'z'
		Random random = new Random();
		StringBuilder buffer = new StringBuilder(targetStringLength);
		for (int i = 0; i < targetStringLength; i++) {
			int randomLimitedInt = leftLimit + (int) (random.nextFloat() * (rightLimit - leftLimit + 1));
			buffer.append((char) randomLimitedInt);
		}
		String generatedString = buffer.toString();
		return generatedString;
	}
	
	public static String randomStringFollowDate() {
		Date date= new Date();
		long time = date. getTime();
		String keyRandom = randomKey(20);
		return time+keyRandom;
	}
	
	public static String getStringFollowDate() {
		Date date= new Date();
		long time = date. getTime();
		return time+"";
	}
	
}
