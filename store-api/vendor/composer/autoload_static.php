<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInite1834e375d0aac70172b6673488852d1
{
    public static $files = array (
        'a4a119a56e50fbb293281d9a48007e0e' => __DIR__ . '/..' . '/symfony/polyfill-php80/bootstrap.php',
        '320cde22f66dd4f5d3fd621d3e88b98f' => __DIR__ . '/..' . '/symfony/polyfill-ctype/bootstrap.php',
        '0e6d7bf4a5811bfa5cf40c5ccd6fae6a' => __DIR__ . '/..' . '/symfony/polyfill-mbstring/bootstrap.php',
    );

    public static $prefixLengthsPsr4 = array (
        'U' => 
        array (
            'Ubiquity\\tests\\unit\\' => 20,
            'Ubiquity\\' => 9,
        ),
        'T' => 
        array (
            'Twig\\' => 5,
        ),
        'S' => 
        array (
            'Symfony\\Polyfill\\Php80\\' => 23,
            'Symfony\\Polyfill\\Mbstring\\' => 26,
            'Symfony\\Polyfill\\Ctype\\' => 23,
            'Symfony\\Component\\Process\\' => 26,
        ),
        'C' => 
        array (
            'Codeception\\Module\\' => 19,
            'Codeception\\Lib\\Connector\\' => 26,
        ),
        'A' => 
        array (
            'Ajax\\' => 5,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Ubiquity\\tests\\unit\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmv/ubiquity-codeception/src/unit',
        ),
        'Ubiquity\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmv/ubiquity-attributes/src/Ubiquity',
            1 => __DIR__ . '/..' . '/phpmv/ubiquity-commands/src/Ubiquity',
            2 => __DIR__ . '/..' . '/phpmv/ubiquity-dev/src/Ubiquity',
            3 => __DIR__ . '/..' . '/phpmv/ubiquity-devtools/src',
            4 => __DIR__ . '/..' . '/phpmv/ubiquity-webtools/src/Ubiquity',
            5 => __DIR__ . '/..' . '/phpmv/ubiquity/src/Ubiquity',
        ),
        'Twig\\' => 
        array (
            0 => __DIR__ . '/..' . '/twig/twig/src',
        ),
        'Symfony\\Polyfill\\Php80\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/polyfill-php80',
        ),
        'Symfony\\Polyfill\\Mbstring\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/polyfill-mbstring',
        ),
        'Symfony\\Polyfill\\Ctype\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/polyfill-ctype',
        ),
        'Symfony\\Component\\Process\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/process',
        ),
        'Codeception\\Module\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmv/ubiquity-codeception/src/functional',
        ),
        'Codeception\\Lib\\Connector\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmv/ubiquity-codeception/src/functional',
        ),
        'Ajax\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmv/php-mv-ui/Ajax',
        ),
    );

    public static $fallbackDirsPsr4 = array (
        0 => __DIR__ . '/../..' . '/app',
    );

    public static $classMap = array (
        'Attribute' => __DIR__ . '/..' . '/symfony/polyfill-php80/Resources/stubs/Attribute.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'Stringable' => __DIR__ . '/..' . '/symfony/polyfill-php80/Resources/stubs/Stringable.php',
        'UnhandledMatchError' => __DIR__ . '/..' . '/symfony/polyfill-php80/Resources/stubs/UnhandledMatchError.php',
        'ValueError' => __DIR__ . '/..' . '/symfony/polyfill-php80/Resources/stubs/ValueError.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInite1834e375d0aac70172b6673488852d1::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInite1834e375d0aac70172b6673488852d1::$prefixDirsPsr4;
            $loader->fallbackDirsPsr4 = ComposerStaticInite1834e375d0aac70172b6673488852d1::$fallbackDirsPsr4;
            $loader->classMap = ComposerStaticInite1834e375d0aac70172b6673488852d1::$classMap;

        }, null, ClassLoader::class);
    }
}
