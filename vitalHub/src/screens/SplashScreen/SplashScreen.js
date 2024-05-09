import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ContainSplash } from './Style';

const SplashScreen = () => {
    const navigation = useNavigation();
    const logoScale = useRef(new Animated.Value(1)).current; // Referência para o valor da animação de escala
    const opacity = useRef(new Animated.Value(1)).current; // Referência para o valor da animação de opacidade

    useEffect(() => {
        // Animação para aumentar o tamanho do logo
        const scaleUpAnimation = Animated.timing(logoScale, {
            toValue: 1.3, // Aumentar para 1.5 vezes o tamanho original
            duration: 3000,
            useNativeDriver: true
        });

        // Animação para diminuir o tamanho do logo
        const scaleDownAnimation = Animated.timing(logoScale, {
            toValue: 5, // Retornar ao tamanho original
            duration: 3000,
            useNativeDriver: true
        });

        // Animação para diminuir a opacidade
        const opacityAnimation = Animated.timing(opacity, {
            toValue: 0, // Diminuir a opacidade para 0
            duration: 3000,
            useNativeDriver: true
        });

        // Combine as animações em sequência com repetição
        Animated.loop(
            Animated.sequence([
                Animated.parallel([scaleUpAnimation, opacityAnimation]),
                scaleDownAnimation
            ])
        ).start();

        // Navegue para a próxima tela após 3 segundos
        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 3000);

        // Limpe o temporizador se o componente for desmontado antes do tempo limite
        return () => clearTimeout(timer);
    }, [navigation, logoScale, opacity]);

    return (
        <ContainSplash>
            <Animated.Image
                source={require('../../assets/vhub_white.png')}
                style={{
                    width: 200,
                    height: 100,
                    transform: [{ scale: logoScale }],
                    opacity: opacity // Aplicar a opacidade animada
                }}
            />
        </ContainSplash>
    );
};

export default SplashScreen;