//  File :  BoardService.java
//  User :  it
//  Date :  2026-09-17
//  Time :  오후 4:59
//  Desc :  

package bitc.aws402.boardapiserver.service;

import bitc.aws402.boardapiserver.dto.BoardDTO;
import bitc.aws402.boardapiserver.mapper.BoardMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RequiredArgsConstructor
@Service
public class BoardService {

  private final BoardMapper boardMapper;

  public List<BoardDTO> selectBoardList() {

    return boardMapper.selectBoardList();
  }
}











