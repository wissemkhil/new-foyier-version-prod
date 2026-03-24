import React, { useState, useEffect } from 'react';
import {
  Box, TextField, Button, Typography, CircularProgress,
  Snackbar, Alert, Chip, useTheme,
} from '@mui/material';
import { Send, CheckCircle } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState({ open: false, type: 'success', msg: '' });

  const selectedPlan = searchParams.get('plan');

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // Pre-fill subject and message when a plan is selected
  useEffect(() => {
    if (selectedPlan) {
      const planName = t(`pricing.${selectedPlan}.name`);
      const planPrice = t(`pricing.${selectedPlan}.price`);
      const currency = t('pricing.currency');
      const period = t(`pricing.${selectedPlan}.period`);

      setValue('subject', t('contact.plan_subject', { plan: planName }));
      setValue(
        'message',
        t('contact.plan_message', {
          plan: planName,
          price: `${planPrice} ${currency} ${period}`,
        })
      );
    }
  }, [selectedPlan, t, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSnack({ open: true, type: 'success', msg: t('contact.success') });
    reset();
    // Clear plan param after sending
    if (selectedPlan) {
      setSearchParams({});
    }
  };

  const clearPlan = () => {
    setSearchParams({});
    setValue('subject', '');
    setValue('message', '');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Box
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          bgcolor: theme.palette.background.paper,
          boxShadow: theme.palette.mode === 'dark'
            ? '0 8px 32px rgba(0,0,0,0.4)'
            : '0 8px 32px rgba(0,0,0,0.08)',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
          {t('contact.form_title')}
        </Typography>

        {/* Selected Plan Banner */}
        {selectedPlan && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                mt: 1,
                mb: 2,
                p: 2,
                borderRadius: 2,
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(26, 35, 126, 0.2), rgba(57, 73, 171, 0.15))'
                  : 'linear-gradient(135deg, rgba(26, 35, 126, 0.06), rgba(57, 73, 171, 0.04))',
                border: `1px solid ${theme.palette.mode === 'dark'
                  ? 'rgba(92, 107, 192, 0.3)'
                  : 'rgba(26, 35, 126, 0.12)'}`,
                flexWrap: 'wrap',
              }}
            >
              <CheckCircle sx={{ color: theme.palette.secondary.main, fontSize: 22 }} />
              <Typography variant="body2" sx={{ fontWeight: 500, flex: 1 }}>
                {t('contact.plan_selected')}
              </Typography>
              <Chip
                label={`${t(`pricing.${selectedPlan}.name`)} — ${t(`pricing.${selectedPlan}.price`)} ${t('pricing.currency')} ${t(`pricing.${selectedPlan}.period`)}`}
                color="primary"
                size="small"
                onDelete={clearPlan}
                sx={{ fontWeight: 600 }}
              />
            </Box>
          </motion.div>
        )}

        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            fullWidth
            label={t('contact.name')}
            placeholder={t('contact.name_placeholder')}
            margin="normal"
            error={!!errors.name}
            helperText={errors.name?.message}
            {...register('name', {
              required: t('contact.validation.name_required'),
            })}
          />

          <TextField
            fullWidth
            label={t('contact.email_label')}
            placeholder={t('contact.email_placeholder')}
            type="email"
            margin="normal"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register('email', {
              required: t('contact.validation.email_required'),
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: t('contact.validation.email_invalid'),
              },
            })}
          />

          <TextField
            fullWidth
            label={t('contact.phone_label')}
            placeholder={t('contact.phone_placeholder')}
            margin="normal"
            {...register('phone')}
          />

          <TextField
            fullWidth
            label={t('contact.subject')}
            placeholder={t('contact.subject_placeholder')}
            margin="normal"
            error={!!errors.subject}
            helperText={errors.subject?.message}
            InputLabelProps={selectedPlan ? { shrink: true } : undefined}
            {...register('subject', {
              required: t('contact.validation.subject_required'),
            })}
          />

          <TextField
            fullWidth
            label={t('contact.message')}
            placeholder={t('contact.message_placeholder')}
            multiline
            rows={4}
            margin="normal"
            error={!!errors.message}
            helperText={errors.message?.message}
            InputLabelProps={selectedPlan ? { shrink: true } : undefined}
            {...register('message', {
              required: t('contact.validation.message_required'),
              minLength: {
                value: 10,
                message: t('contact.validation.message_min'),
              },
            })}
          />

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
            fullWidth
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Send />}
            sx={{ mt: 3, py: 1.5 }}
          >
            {loading ? t('contact.sending') : t('contact.send')}
          </Button>
        </Box>
      </Box>

      <Snackbar
        open={snack.open}
        autoHideDuration={5000}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity={snack.type}
          onClose={() => setSnack((s) => ({ ...s, open: false }))}
          sx={{ borderRadius: 2 }}
        >
          {snack.msg}
        </Alert>
      </Snackbar>
    </motion.div>
  );
};

export default ContactForm;
