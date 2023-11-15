Object.assign(
  window.gameData,
  {
    InventoryCategories: {
      1: {
        label: 'Одежда',
        name: 'clothes',
        types: ['Clothes'],
        description: null,
        icon: 'clothes/t-shirt.svg',
      },
      2: {
        label: 'Оружие/Амуниция',
        name: 'weapon',
        types: ['Weapon', 'WeaponAmmo'],
        description: null,
        icon: 'weapon-ammo/rifle-mid.svg',
      },
      3: {
        label: 'Еда',
        name: 'food',
        types: ['Food', 'Drink', 'AlcoholicDrink'],
        description: null,
        icon: 'food/hamburger.svg',
      },
      4: {
        label: 'Медикаменты',
        name: 'medicine',
        types: ['Medicines', 'MedicinesEnergy'],
        description: null,
        icon: 'medicine/aidkit.svg',
      },
      5: {
        label: 'Электроника',
        name: 'electronics',
        types: ['Phone'],
        description: null,
        icon: 'common/smartphone.svg',
      },
      6: {
        label: 'Модификации оружия',
        name: 'weapon-components',
        types: ['WeaponComponent'],
        description: null,
        icon: 'inventory/gear.svg',
      },
      7: {
        label: 'Разное',
        name: 'other',
        types: [],
        description: null,
        icon: 'inventory/box.svg',
      },
      8: {
        label: 'Наркотики',
        name: 'drugs',
        types: [],
        description: null,
        icon: 'inventory/box.svg',
      },
      9: {
        label: 'Материалы',
        name: 'materials',
        types: [],
        description: null,
        icon: 'inventory/box.svg',
      }
    },
  },
);
// EOF
