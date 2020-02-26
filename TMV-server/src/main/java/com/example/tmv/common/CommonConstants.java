package com.example.tmv.common;

public interface CommonConstants {

	// order
	final String ASCENDING = "ascending";
	final String DESCENDING = "descending";

	final long MAX_PRICE = 600000000000L;

	final double RELATED_PRICE = 0.5; // 0.2 ~ 20%

	final int DEFAULT_NUM_RELATED_THREAD = 5;

	final String FIREBASE_SERVER_KEY = "AAAAnB_0Gf4:APA91bH5x_Xq4arIirA6KUnzFwCASl3gFtj_Uq5omt2wuMt6Z0HtfyY2Vx7U0_hUGC0F7AYFKuNky9iDz8GSVIpa5m1BWSI3SKWAOJRuSbaQ18RvY8ppBYv2T0WVPeTYqA2N7Ip-lmuj";

	final String FIREBASE_API_URL = "https://fcm.googleapis.com/fcm/send";

	final String FIREBASE_NOTI_TITLE = "Thông báo từ CMS";
	final String FIREBASE_NOTI_CONTENT = "Bạn có một tin nhắn mới";
}
