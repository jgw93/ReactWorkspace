package com.mysite.springbackend.service;

import com.mysite.springbackend.entity.Board;
import com.mysite.springbackend.entity.User;
import com.mysite.springbackend.exception.UserNotFoundException;
import com.mysite.springbackend.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class BoardService {
    @Autowired
    private BoardRepository boardRepository;

    public Board saveBoard(Board newBoard) {
        newBoard.setHit(0);
        return boardRepository.save(newBoard);
    }

    public List<Board> getAllBoards() {
        return boardRepository.findAll();
    }

    public Board getBoardById(Long bno) {
        return boardRepository.findById(bno).orElseThrow(() -> new UserNotFoundException(bno));
    }

    public Board updateBoard(@RequestBody Board newBoard, @PathVariable Long bno) {
        return boardRepository.findById(bno)
                .map(board -> {
                    board.setTitle(newBoard.getTitle());
                    board.setAuthor(newBoard.getAuthor());
                    board.setContent(newBoard.getContent());
                    return boardRepository.save(board);
                }).orElseThrow(() -> new UserNotFoundException(bno));
    }

    public String deleteBoard(@PathVariable Long bno) {
        if(!boardRepository.existsById(bno)){
            throw new UserNotFoundException(bno);
        }
        boardRepository.deleteById(bno);
        return "게시글 번호: " + bno + "는 삭제 되었습니다";
    }

    public void increaseHitCount(Long bno) {
        boardRepository.increaseHitCount(bno);
    }

}
