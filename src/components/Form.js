import React, { useState } from "react";
import {
  View,
  Text,
} from "react-native";
import { Controller } from "react-hook-form";
import { InputField } from "./InputField";
import { globalStyles } from "../assets/styles/styles";

export const Form = ({
  control,
  errors,
  fields,
  onBlur,
  onFocus,
  isFocused,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={{width: '100%'}}>
      <View style={{ gap: 16, width: "100%" }}>
        {fields.includes("login") && (
          <Controller
            control={control}
            render={({ field: { onChange, value, name } }) => (
              <InputField
                name={name}
                placeholder="Логін"
                onFocus={onFocus}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isFocused={isFocused}
              />
            )}
            name="login"
            rules={{ required: true }}
          />
        )}
        {errors.login && (
          <Text style={globalStyles.errorText}>Поле "Логін" обов'язкове</Text>
        )}

        {fields.includes("email") && (
          <Controller
            control={control}
            render={({ field: { onChange, value, name } }) => (
              <InputField
                keyboardType="email-address"
                placeholder="Адреса електронної пошти"
                onFocus={onFocus}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isFocused={isFocused}
                name={name}
              />
            )}
            name="email"
            rules={{ required: true, pattern: /^\S+@\S+$/i }}
          />
        )}
        {errors.email && (
          <Text style={globalStyles.errorText}>
            Введіть коректну адресу єлектронної пошти
          </Text>
        )}

        {fields.includes("password") && (
          <Controller
            control={control}
            render={({ field: { onChange, value, name } }) => (
              <InputField
                placeholder="Пароль"
                onFocus={onFocus}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isFocused={isFocused}
                name={name}
                isPasswordVisible={isPasswordVisible}
                togglePasswordVisibility={togglePasswordVisibility}
              />
            )}
            name="password"
            rules={{ required: true, minLength: 6 }}
          />
        )}
        {errors.password && (
          <Text style={globalStyles.errorText}>
            Поле "Пароль" містить мінімум 6 символів
          </Text>
        )}
      </View>
    </View>
  );
};
