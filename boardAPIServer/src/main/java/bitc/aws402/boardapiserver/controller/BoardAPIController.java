//  File :  BoardAPIController.java
//  User :  it
//  Date :  2026-09-16
//  Time :  오후 2:01
//  Desc :  

package bitc.aws402.boardapiserver.controller;

import bitc.aws402.boardapiserver.dto.BoardDTO;
import bitc.aws402.boardapiserver.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//  @CrossOrigin : CORS 오류 발생 시 지정한 URL 에서 요청하는 리소스는 CORS 규칙 위반에서 제외하는 어노테이션
//  클래스와 메소드에 모두 사용 가능
//  {} 를 사용하여 URL 을 여러개 등록할 수 있음

//@CrossOrigin({"http://localhost:5173", "http://localhost:9090"})
@RequestMapping("/api")
@RequiredArgsConstructor
@RestController
public class BoardAPIController {

  private final BoardService boardService;

//  @CrossOrigin("http://localhost:5173")
  @GetMapping({"", "/"})
  public String index() {
    return "Board API Server 접속";
  }

//  @CrossOrigin("http://localhost:5173")
  @GetMapping("/boardList")
  public Object selectBoardList() {

    List<BoardDTO> boardList = boardService.selectBoardList();
    return boardList;
  }

  @GetMapping("/boardDetail")
  public String selectBoardDetail(@RequestParam("boardIdx") int boardIdx) {

    return "게시물 상세 페이지 : " + boardIdx;
  }

  @PostMapping("/boardWrite")
  public String insertBoard(@ModelAttribute BoardDTO board) {

    System.out.println(board.getBoardTitle());
    System.out.println(board.getBoardContents());

    return "게시물 등록 페이지";
  }
}











