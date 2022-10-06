package com.example.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PhoneNumber {
    @Id
    private String phoneNumber;
    @ManyToOne
    @JoinColumn(name = "garage_id", referencedColumnName = "id")
    private Garage garage;
}
