package com.example.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Car {
    @Id
    private Integer id;
    private String type;
    private String goStart;
    private String goEnd;
    private String dateStart;
    private String dateEnd;
    private String nameHomeCar;
    private String phone;
    private String email;
}
