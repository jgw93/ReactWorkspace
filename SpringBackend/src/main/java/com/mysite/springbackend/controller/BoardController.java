package com.mysite.springbackend.controller;

import com.mysite.springbackend.entity.Board;
import com.mysite.springbackend.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class BoardController {
    @Autowired
    private BoardService boardService;

    @PostMapping("/board")
    public Board newBoard(@RequestBody Board newBoard) {
        return boardService.saveBoard(newBoard);
    }

    @GetMapping("/boards")
    public List<Board> getAllBoards() {
        return boardService.getAllBoards();
    }

    @GetMapping("/board/{bno}")
    public Board getBoardByBno(@PathVariable Long bno) {
        boardService.increaseHitCount(bno);
        return boardService.getBoardById(bno);
    }

    @PutMapping("/board/{bno}")
    public Board updateBoard(@PathVariable Long bno, @RequestBody Board newBoard) {
        return boardService.updateBoard(newBoard, bno);
    }

    @DeleteMapping("/board/{bno}")
    public String deleteBoard(@PathVariable Long bno) {
        return boardService.deleteBoard(bno);
    }

}
