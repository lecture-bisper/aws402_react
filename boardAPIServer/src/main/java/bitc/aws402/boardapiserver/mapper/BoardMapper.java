//  File :  bitc.aws402.boardapiserver.mapper.BoardMapper.java
//  User :  it
//  Date :  2026-09-17
//  Time :  오후 5:00
//  Desc :  

package bitc.aws402.boardapiserver.mapper;

import bitc.aws402.boardapiserver.dto.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {


  public List<BoardDTO> selectBoardList();
}











