package com.mysite.springbackend.repository;

import com.mysite.springbackend.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface BoardRepository extends JpaRepository<Board, Long> {
    @Modifying
    @Transactional
    @Query("UPDATE Board b SET b.hit = b.hit + 1 WHERE b.bno = :bno")
    void increaseHitCount(Long bno);
}
