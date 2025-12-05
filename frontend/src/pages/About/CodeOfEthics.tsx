import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import {
    FaBalanceScale,
    FaLock,
    FaSearch,
    FaHandshake,
    FaGavel
} from 'react-icons/fa';
import { routes, SupportedLanguage } from '../../config/routes';

const CodeOfEthics: FC = () => {
    const { t, i18n } = useTranslation();
    const currentLang = (i18n.language?.substring(0, 2) || 'en') as SupportedLanguage;

    return (
        <div className="about">
            <Helmet>
                <title>{t('meta.codeOfEthics.title')}</title>
                <meta name="description" content={t('meta.codeOfEthics.description')} />
                <meta name="keywords" content={t('meta.codeOfEthics.keywords')} />
            </Helmet>

            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <h1>{t('codeOfEthics.title')}</h1>
                    <p className="about-subtitle">
                        {t('codeOfEthics.intro.title')}
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="section section-white">
                <div className="container">
                    <p className="about-text centered">
                        {t('codeOfEthics.intro.description')}
                    </p>
                </div>
            </section>

            {/* Ethical Commitments */}
            <section className="section section-gray">
                <div className="container">
                    <h2 className="section-title">{t('codeOfEthics.commitments.title')}</h2>

                    <div className="ethics-grid">
                        <div className="ethics-card">
                            <div className="ethics-icon">
                                <FaBalanceScale />
                            </div>
                            <h4>{t('codeOfEthics.commitments.impartiality.title')}</h4>
                            <p>
                                {t('codeOfEthics.commitments.impartiality.description')}
                            </p>
                        </div>

                        <div className="ethics-card">
                            <div className="ethics-icon">
                                <FaLock />
                            </div>
                            <h4>{t('codeOfEthics.commitments.confidentiality.title')}</h4>
                            <p>
                                {t('codeOfEthics.commitments.confidentiality.description')}
                            </p>
                        </div>

                        <div className="ethics-card">
                            <div className="ethics-icon">
                                <FaSearch />
                            </div>
                            <h4>{t('codeOfEthics.commitments.objectivity.title')}</h4>
                            <p>
                                {t('codeOfEthics.commitments.objectivity.description')}
                            </p>
                        </div>

                        <div className="ethics-card">
                            <div className="ethics-icon">
                                <FaHandshake />
                            </div>
                            <h4>{t('codeOfEthics.commitments.professionalism.title')}</h4>
                            <p>
                                {t('codeOfEthics.commitments.professionalism.description')}
                            </p>
                        </div>

                        <div className="ethics-card">
                            <div className="ethics-icon">
                                <FaGavel />
                            </div>
                            <h4>{t('codeOfEthics.legalCompliance.title')}</h4>
                            <p>
                                {t('codeOfEthics.legalCompliance.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Message */}
            <section className="section section-white">
                <div className="container">
                    <div className="ethics-footer">
                        <p>
                            {t('codeOfEthics.conclusion')}
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section section-cta-final">
                <div className="container">
                    <h2>{t('codeOfEthics.cta.title')}</h2>
                    <p>
                        {t('codeOfEthics.cta.description')}
                    </p>
                    <div className="cta-buttons">
                        <Link to={routes.contact[currentLang]} className="btn btn-primary-large">{t('common.contactUs')}</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CodeOfEthics;