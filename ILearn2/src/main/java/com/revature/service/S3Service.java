package com.revature.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Date;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;

@Service
public class S3Service {
	
	@Value("${amazon.AWSAccessKeyId}")
	private String AWSAccessKeyId;
	
	@Value("${amazon.AWSSecretKey}")
	private String AWSSecretKey;
	
	@Value("${amazon.bucketName}")
	private String bucketName;
	
	private AmazonS3 s3client;
	
	public void viewS3() {
		System.out.println("aws_access_key_id = " + AWSAccessKeyId);
	}
	
	@PostConstruct
	private void initializeAmazon() {
		AWSCredentials credentials = new BasicAWSCredentials(this.AWSAccessKeyId, this.AWSSecretKey);
		this.s3client = AmazonS3ClientBuilder
				.standard()
				.withRegion(Regions.US_EAST_2)
				.build();
	}
	
	public AmazonS3 getS3Client() {
		return this.s3client;
	}
	
	public File convertMultiPartToFile(MultipartFile file) throws IOException {
		File convertedFile = new File(file.getOriginalFilename());
		FileOutputStream fos = new FileOutputStream(convertedFile);
		fos.write(file.getBytes());
		fos.close();
		return convertedFile;
	}
	
	public String generateFileName(MultipartFile multiPart) {
		return new Date().getTime() + "-" + multiPart.getOriginalFilename().replace(" ", "_");
	}
	
	public void uploadFileTos3bucket(String fileName, File file) {
		s3client.putObject(new PutObjectRequest("p1jan25bucket", fileName, file).withCannedAcl(CannedAccessControlList.PublicRead));
	}
	
	public String uploadFile(MultipartFile multipartFile) {
		String fileUrl = "";
		try {
			File file = convertMultiPartToFile(multipartFile);
			String fileName = generateFileName(multipartFile);
			fileUrl = "https://p1jan25bucket.s3.us-east-2.amazonaws.com/" + fileName;
			uploadFileTos3bucket(fileName, file);
			file.delete();
		} catch(Exception e) {
			e.printStackTrace();
		}
		return fileUrl;
	}

}
