package com.jwnagai.myapp.domain;


import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

import com.jwnagai.myapp.domain.enumeration.Language;

/**
 * A Ingredients.
 */
@Entity
@Table(name = "ingredients")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Ingredients implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "jhi_year")
    private Integer year;

    @Column(name = "month")
    private Integer month;

    @Column(name = "jhi_date")
    private Integer date;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "images")
    private String images;

    @Column(name = "cuisine_name")
    private String cuisineName;

    @Column(name = "cuisine_description")
    private String cuisineDescription;

    @Column(name = "cuisine_images")
    private String cuisineImages;

    @Enumerated(EnumType.STRING)
    @Column(name = "language")
    private Language language;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getYear() {
        return year;
    }

    public Ingredients year(Integer year) {
        this.year = year;
        return this;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Integer getMonth() {
        return month;
    }

    public Ingredients month(Integer month) {
        this.month = month;
        return this;
    }

    public void setMonth(Integer month) {
        this.month = month;
    }

    public Integer getDate() {
        return date;
    }

    public Ingredients date(Integer date) {
        this.date = date;
        return this;
    }

    public void setDate(Integer date) {
        this.date = date;
    }

    public String getName() {
        return name;
    }

    public Ingredients name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public Ingredients description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImages() {
        return images;
    }

    public Ingredients images(String images) {
        this.images = images;
        return this;
    }

    public void setImages(String images) {
        this.images = images;
    }

    public String getCuisineName() {
        return cuisineName;
    }

    public Ingredients cuisineName(String cuisineName) {
        this.cuisineName = cuisineName;
        return this;
    }

    public void setCuisineName(String cuisineName) {
        this.cuisineName = cuisineName;
    }

    public String getCuisineDescription() {
        return cuisineDescription;
    }

    public Ingredients cuisineDescription(String cuisineDescription) {
        this.cuisineDescription = cuisineDescription;
        return this;
    }

    public void setCuisineDescription(String cuisineDescription) {
        this.cuisineDescription = cuisineDescription;
    }

    public String getCuisineImages() {
        return cuisineImages;
    }

    public Ingredients cuisineImages(String cuisineImages) {
        this.cuisineImages = cuisineImages;
        return this;
    }

    public void setCuisineImages(String cuisineImages) {
        this.cuisineImages = cuisineImages;
    }

    public Language getLanguage() {
        return language;
    }

    public Ingredients language(Language language) {
        this.language = language;
        return this;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Ingredients ingredients = (Ingredients) o;
        if (ingredients.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), ingredients.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Ingredients{" +
            "id=" + getId() +
            ", year=" + getYear() +
            ", month=" + getMonth() +
            ", date=" + getDate() +
            ", name='" + getName() + "'" +
            ", description='" + getDescription() + "'" +
            ", images='" + getImages() + "'" +
            ", cuisineName='" + getCuisineName() + "'" +
            ", cuisineDescription='" + getCuisineDescription() + "'" +
            ", cuisineImages='" + getCuisineImages() + "'" +
            ", language='" + getLanguage() + "'" +
            "}";
    }
}
