package com.example.repository;

import com.example.model.Car;
import com.example.projection.ICarProjection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

@Transactional
public interface ICarRepository extends JpaRepository<Car, Integer> {
    Page<ICarProjection> findBy(Pageable pageable);

    @Query(value = "select * from car c where c.id = :id", nativeQuery = true)
    Car getCarById(@Param("id") Integer id);

    @Modifying
    @Query(value = "delete from car as c where c.id = :id", nativeQuery = true)
    void deleteCarById(@Param("id") Integer id);
}
