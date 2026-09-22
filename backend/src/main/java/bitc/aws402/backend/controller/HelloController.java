//  File :  HelloController.java
//  User :  it
//  Date :  2026-09-18
//  Time :  오전 9:19
//  Desc :  

package bitc.aws402.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//  스프링 부트 프로젝트에서 Controller 파일에 @Controller 어노테이션을 사용해야지만 templates 안에 있는 html 파일과 Controller 파일의 내용이 연동되고, 웹 브라우저에 View 내용을 전달할 수 있음
//  templates 폴더 안에 아무런 내용이 없더라도, static 폴더에 index.html 파일 및 여러가지 리소스 파일이 있을 경우 해당 파일을 인식함
//  리액트 프로젝트를 빌드하여 생성된 배포 파일을 스프링부트 프로젝트의 static 폴더 안에 복사 시 스프링 프로젝트로 만든 View 가 동작하는 것이 아니라 static 폴더 안으로 복사된 리액트로 만든 View 가 동작함

//@CrossOrigin("http://localhost:5173")
@RestController
public class HelloController {

  @GetMapping("/hello")
  public String hello() {
    return "리액트 + 스프링 서버 연동하기 (서버에서 전송하는 데이터)";
  }
}











