<?php

/**
 * src/Entity/Entity.php
 *
 * @license  https://opensource.org/licenses/MIT MIT License
 * @link     http://www.etsisi.upm.es/ ETS de Ingeniería de Sistemas Informáticos
 */

namespace TDW\ACiencia\Entity;

use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(
 *     name="entity",
 *     uniqueConstraints={
 *          @ORM\UniqueConstraint(
 *              name = "Entity_name_uindex",
 *              columns = {"name"}
 *          )
 *      }
 * )
 */
class Entity extends Element
{
    /**
     * @ORM\ManyToMany(
     *     targetEntity="Person",
     *     inversedBy="entities"
     *     )
     * @ORM\JoinTable(
     *   name="person_participates_entity",
     *   joinColumns={
     *     @ORM\JoinColumn(
     *          name="entity_id",
     *          referencedColumnName="id"
     *     )
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(
     *          name="person_id",
     *          referencedColumnName="id"
     *     )
     *   }
     * )
     */
    protected Collection $persons;

    /**
     * @ORM\ManyToMany(
     *     targetEntity="Product",
     *     mappedBy="entities"
     *     )
     * @ORM\OrderBy({ "id" = "ASC" })
     */
    protected Collection $products;

    /**
     * Entity constructor.
     * @param string $name
     * @param DateTime|null $birthDate
     * @param DateTime|null $deathDate
     * @param string|null $imageUrl
     * @param string|null $wikiUrl
     */
    public function __construct(
        string $name,
        ?DateTime $birthDate = null,
        ?DateTime $deathDate = null,
        ?string $imageUrl = null,
        ?string $wikiUrl = null
    ) {
        parent::__construct($name, $birthDate, $deathDate, $imageUrl, $wikiUrl);
        $this->persons = new ArrayCollection();
        $this->products = new ArrayCollection();
    }

    // Persons

    /**
     * @return Person[]
     */
    public function getPersons(): array
    {
        return $this->persons->getValues();
    }

    /**
     * @param Person $person
     * @return bool
     */
    public function containsPerson(Person $person): bool
    {
        return $this->persons->contains($person);
    }

    /**
     * @param Person $person
     *
     * @return Entity
     */
    public function addPerson(Person $person): self
    {
        if ($this->containsPerson($person)) {
            return $this;
        }

        $this->persons->add($person);
        return $this;
    }

    /**
     * @param Person $person
     *
     * @return Entity|null Entity if this collection contained the specified person, null otherwise.
     */
    public function removePerson(Person $person): ?self
    {
        if (!$this->containsPerson($person)) {
            return null;
        }

        $this->persons->removeElement($person);
        return $this;
    }

    // Products

    /**
     * @return Product[]
     */
    public function getProducts(): array
    {
        return $this->products->getValues();
    }

    /**
     * @param Product $product
     * @return bool
     */
    public function containsProduct(Product $product): bool
    {
        return $this->products->contains($product);
    }

    /**
     * @param Product $product
     *
     * @return Entity
     */
    public function addProduct(Product $product): self
    {
        $this->products->add($product);
        $product->addEntity($this);
        return $this;
    }

    /**
     * @param Product $product
     *
     * @return Entity|null Entity if this collection contained the specified product, null otherwise.
     */
    public function removeProduct(Product $product): ?self
    {
        $this->products->removeElement($product);
        return (null !== $product->removeEntity($this))
            ? $this
            : null;
    }

    /**
     * The __toString method allows a class to decide how it will react when it is converted to a string.
     *
     * @return string
     * @link http://php.net/manual/en/language.oop5.magic.php#language.oop5.magic.tostring
     */
    public function __toString(): string
    {
        return sprintf(
            '%s persons="%s", products="%s")]',
            parent::__toString(),
            $this->getCodesTxt($this->getPersons()),
            $this->getCodesTxt($this->getProducts())
        );
    }

    /**
     * @inheritDoc
     */
    public function jsonSerialize(): array
    {
        $data = parent::jsonSerialize();
        $data['products'] = $this->getProducts() ? $this->getCodes($this->getProducts()) : null;
        $data['persons'] = $this->getPersons() ? $this->getCodes($this->getPersons()) : null;

        return ['entity' => $data];
    }
}
