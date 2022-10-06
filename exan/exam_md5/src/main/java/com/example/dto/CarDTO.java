package com.example.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CarDTO {
    private Integer id;
    @NotBlank(message = "Không được để trống!!!")
    private String type;
    @NotBlank(message = "Không được để trống!!!")
    private String goStart;
    @NotBlank(message = "Không được để trống!!!")
    private String goEnd;
    @NotBlank(message = "Không được để trống!!!")
    private String dateStart;
    @NotBlank(message = "Không được để trống!!!")
    private String dateEnd;
    @NotBlank(message = "Không được để trống!!!")
    private String nameHomeCar;
    @NotBlank(message = "Không được để trống!!!")
    private String phone;
    @NotBlank(message = "Không được để trống!!!")
    private String email;
}
