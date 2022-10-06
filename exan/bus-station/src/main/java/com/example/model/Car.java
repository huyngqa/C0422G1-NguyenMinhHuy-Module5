package com.example.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Car {
    @Id
    private String licensePlates;
    @ManyToOne
    @JoinColumn(name = "type_car_id", referencedColumnName = "id")
    private TypeCar typeCar;
    @ManyToOne
    @JoinColumn(name = "garage_id", referencedColumnName = "id")
    private Garage garage;
    @ManyToMany
    @JoinTable(name = "car_buses",
            joinColumns = @JoinColumn(name = "license_plates"), inverseJoinColumns = @JoinColumn(name = "buses_id"))
    private List<Buses> busesList;
}
