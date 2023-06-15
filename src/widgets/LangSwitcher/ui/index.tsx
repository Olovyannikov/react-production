import {useTranslation} from "react-i18next";
import {Button} from "@/shared/ui/Button";

export const LangSwitcher = () => {
    const {t, i18n} = useTranslation();
    const toggle = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

    return <Button onClick={toggle} text>{t('Язык')}</Button>
}