//  File :  BoardDTO.java
//  User :  it
//  Date :  2026-09-16
//  Time :  오후 3:55
//  Desc :  

package bitc.aws402.boardapiserver.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardDTO {

  private int boardIdx;
  private String boardTitle;
  private String boardContents;
  private String boardCreateId;
  private String boardCreateDate;
  private String boardUpdateId;
  private String boardUpdateDate;
  private String boardHitCnt;

}











