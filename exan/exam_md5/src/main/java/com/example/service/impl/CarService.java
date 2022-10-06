package com.example.service.impl;

import com.example.model.Car;
import com.example.projection.ICarProjection;
import com.example.repository.ICarRepository;
import com.example.service.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CarService implements ICarService {
    @Autowired
    private ICarRepository iCarRepository;

    @Override
    public Page<ICarProjection> getCars(Pageable pageable) {
        return iCarRepository.findBy(pageable);
    }

    @Override
    public Car getCarById(Integer id) {
        return iCarRepository.getCarById(id);
    }

    @Override
    public void deleteCarById(Integer id) {
        iCarRepository.deleteCarById(id);
    }

    @Override
    public void saveCar(Car car) {
        iCarRepository.save(car);
    }
}
