//  File :  WebMvcConfig.java
//  User :  it
//  Date :  2026-09-16
//  Time :  오후 2:59
//  Desc :  

package bitc.aws402.boardapiserver.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

//    스프링 웹 서버 설정을 위한 WebMvcConfigurer 인터페이스를 상속받아 AddCorsMappings() 메소드를 구현하여 CORS 설정을 서버 전체로 지정할 수 있음
//    addMapping(패턴) : CORS 설정을 지정할 경로 패턴을 지정, '/**' 로 지정 시 해당 스프링 서버의 모든 URL 에 대해서 CORS 규칙을 적용
//    allowedOrigins(URL) : 허용할 URL 설정, 여러개 설정 가능
//    allowedMethods(접속 방식) : 허용할 통신 방식 설정
  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**")
        .allowedOrigins("http://localhost:5173")
        .allowedMethods("GET", "POST", "PUT", "DELETE")
        .allowedHeaders("*")
        .allowCredentials(true);
  }
}











